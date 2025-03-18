
const express = require('express')
import {handler4009} from "./handler4009";
const app = express()
app.get('/4009', handler4009)
app.listen(3000, () => {})
        