
const express = require('express')
import {handler887} from "./handler887";
const app = express()
app.get('/887', handler887)
app.listen(3000, () => {})
        