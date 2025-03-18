
const express = require('express')
import {handler4287} from "./handler4287";
const app = express()
app.get('/4287', handler4287)
app.listen(3000, () => {})
        