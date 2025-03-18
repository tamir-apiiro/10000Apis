
const express = require('express')
import {handler4718} from "./handler4718";
const app = express()
app.get('/4718', handler4718)
app.listen(3000, () => {})
        