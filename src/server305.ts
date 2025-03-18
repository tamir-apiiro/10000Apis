
const express = require('express')
import {handler305} from "./handler305";
const app = express()
app.get('/305', handler305)
app.listen(3000, () => {})
        