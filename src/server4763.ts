
const express = require('express')
import {handler4763} from "./handler4763";
const app = express()
app.get('/4763', handler4763)
app.listen(3000, () => {})
        