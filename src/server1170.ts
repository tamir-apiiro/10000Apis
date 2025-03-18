
const express = require('express')
import {handler1170} from "./handler1170";
const app = express()
app.get('/1170', handler1170)
app.listen(3000, () => {})
        