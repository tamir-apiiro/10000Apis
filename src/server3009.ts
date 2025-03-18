
const express = require('express')
import {handler3009} from "./handler3009";
const app = express()
app.get('/3009', handler3009)
app.listen(3000, () => {})
        