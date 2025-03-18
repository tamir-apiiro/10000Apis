
const express = require('express')
import {handler2802} from "./handler2802";
const app = express()
app.get('/2802', handler2802)
app.listen(3000, () => {})
        