function hero() {
  return (
    <div className="mb-8 flex max-w-3xl flex-1 flex-col justify-end text-slate-50">
      <h1 className="cursor-text text-xl font-bold md:text-4xl">Journey Beyond Horizons updated in ECR Image</h1>
      <p className="my-4 cursor-text text-base md:text-lg">
        Dive into the world of travel with stories that transport you to far-off lands. Adventure
        awaits around every corner. It's time to explore the world!
      </p>
      <div className="cursor-text text-sm font-semibold md:text-xl">Let's go!</div>
      <div className="cursor-text text-sm font-semibold md:text-xl">I have added a image tag to docker image and pushed it to ECR</div>
      <div className="cursor-text text-sm font-semibold md:text-xl">Image tag main branch ka use hota hai git ka ecr ke tag me.</div>
    </div>
  );
}

export default hero;
