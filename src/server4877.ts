
const express = require('express')
import {handler4877} from "./handler4877";
const app = express()
app.get('/4877', handler4877)
app.listen(3000, () => {})
        