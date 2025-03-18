
const express = require('express')
import {handler262} from "./handler262";
const app = express()
app.get('/262', handler262)
app.listen(3000, () => {})
        