
const express = require('express')
import {handler873} from "./handler873";
const app = express()
app.get('/873', handler873)
app.listen(3000, () => {})
        