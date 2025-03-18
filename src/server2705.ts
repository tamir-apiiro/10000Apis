
const express = require('express')
import {handler2705} from "./handler2705";
const app = express()
app.get('/2705', handler2705)
app.listen(3000, () => {})
        