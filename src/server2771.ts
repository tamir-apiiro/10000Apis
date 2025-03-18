
const express = require('express')
import {handler2771} from "./handler2771";
const app = express()
app.get('/2771', handler2771)
app.listen(3000, () => {})
        