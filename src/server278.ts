
const express = require('express')
import {handler278} from "./handler278";
const app = express()
app.get('/278', handler278)
app.listen(3000, () => {})
        