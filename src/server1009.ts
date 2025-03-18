
const express = require('express')
import {handler1009} from "./handler1009";
const app = express()
app.get('/1009', handler1009)
app.listen(3000, () => {})
        