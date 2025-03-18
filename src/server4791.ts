
const express = require('express')
import {handler4791} from "./handler4791";
const app = express()
app.get('/4791', handler4791)
app.listen(3000, () => {})
        