let imageNumber = 0;
pictures = 
{
    0: "almondJoy",
    1: "snickers",
    2: "ferreroRocher",
    3: "lindor",
    4: "kitkat"
};

function shift(i)
{
    if (i < 0)
    {
        imageNumber = 4;
    }
    else if (i > 4)
    {
        imageNumber = 0;
    }
    slide.src = pictures[imageNumber] + ".jpg"
};

function next()
{
    shift(++imageNumber);
};

function previous()
{
    shift(--imageNumber);
};