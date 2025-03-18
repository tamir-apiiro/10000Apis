
const express = require('express')
import {handler4866} from "./handler4866";
const app = express()
app.get('/4866', handler4866)
app.listen(3000, () => {})
        