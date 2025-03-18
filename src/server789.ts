
const express = require('express')
import {handler789} from "./handler789";
const app = express()
app.get('/789', handler789)
app.listen(3000, () => {})
        