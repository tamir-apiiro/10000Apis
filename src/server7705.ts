
const express = require('express')
import {handler7705} from "./handler7705";
const app = express()
app.get('/7705', handler7705)
app.listen(3000, () => {})
        