
const express = require('express')
import {handler477} from "./handler477";
const app = express()
app.get('/477', handler477)
app.listen(3000, () => {})
        