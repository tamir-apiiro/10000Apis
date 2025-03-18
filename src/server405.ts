
const express = require('express')
import {handler405} from "./handler405";
const app = express()
app.get('/405', handler405)
app.listen(3000, () => {})
        