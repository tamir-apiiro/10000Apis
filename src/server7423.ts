
const express = require('express')
import {handler7423} from "./handler7423";
const app = express()
app.get('/7423', handler7423)
app.listen(3000, () => {})
        