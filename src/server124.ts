
const express = require('express')
import {handler124} from "./handler124";
const app = express()
app.get('/124', handler124)
app.listen(3000, () => {})
        