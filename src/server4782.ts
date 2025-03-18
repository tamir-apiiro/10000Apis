
const express = require('express')
import {handler4782} from "./handler4782";
const app = express()
app.get('/4782', handler4782)
app.listen(3000, () => {})
        