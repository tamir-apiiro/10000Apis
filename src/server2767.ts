
const express = require('express')
import {handler2767} from "./handler2767";
const app = express()
app.get('/2767', handler2767)
app.listen(3000, () => {})
        