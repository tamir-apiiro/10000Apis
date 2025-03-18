
const express = require('express')
import {handler2372} from "./handler2372";
const app = express()
app.get('/2372', handler2372)
app.listen(3000, () => {})
        