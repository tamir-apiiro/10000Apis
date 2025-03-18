
const express = require('express')
import {handler2827} from "./handler2827";
const app = express()
app.get('/2827', handler2827)
app.listen(3000, () => {})
        