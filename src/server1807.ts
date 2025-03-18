
const express = require('express')
import {handler1807} from "./handler1807";
const app = express()
app.get('/1807', handler1807)
app.listen(3000, () => {})
        