
const express = require('express')
import {handler2945} from "./handler2945";
const app = express()
app.get('/2945', handler2945)
app.listen(3000, () => {})
        