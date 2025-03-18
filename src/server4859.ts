
const express = require('express')
import {handler4859} from "./handler4859";
const app = express()
app.get('/4859', handler4859)
app.listen(3000, () => {})
        