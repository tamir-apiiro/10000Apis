
const express = require('express')
import {handler4734} from "./handler4734";
const app = express()
app.get('/4734', handler4734)
app.listen(3000, () => {})
        