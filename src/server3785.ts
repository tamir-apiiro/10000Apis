
const express = require('express')
import {handler3785} from "./handler3785";
const app = express()
app.get('/3785', handler3785)
app.listen(3000, () => {})
        