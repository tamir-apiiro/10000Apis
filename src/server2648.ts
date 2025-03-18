
const express = require('express')
import {handler2648} from "./handler2648";
const app = express()
app.get('/2648', handler2648)
app.listen(3000, () => {})
        