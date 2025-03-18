
const express = require('express')
import {handler945} from "./handler945";
const app = express()
app.get('/945', handler945)
app.listen(3000, () => {})
        