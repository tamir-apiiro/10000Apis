
const express = require('express')
import {handler2580} from "./handler2580";
const app = express()
app.get('/2580', handler2580)
app.listen(3000, () => {})
        