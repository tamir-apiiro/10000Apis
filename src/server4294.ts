
const express = require('express')
import {handler4294} from "./handler4294";
const app = express()
app.get('/4294', handler4294)
app.listen(3000, () => {})
        