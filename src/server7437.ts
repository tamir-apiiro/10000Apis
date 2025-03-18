
const express = require('express')
import {handler7437} from "./handler7437";
const app = express()
app.get('/7437', handler7437)
app.listen(3000, () => {})
        