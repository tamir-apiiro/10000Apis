
const express = require('express')
import {handler3972} from "./handler3972";
const app = express()
app.get('/3972', handler3972)
app.listen(3000, () => {})
        