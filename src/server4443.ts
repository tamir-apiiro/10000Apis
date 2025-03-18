
const express = require('express')
import {handler4443} from "./handler4443";
const app = express()
app.get('/4443', handler4443)
app.listen(3000, () => {})
        