
const express = require('express')
import {handler4737} from "./handler4737";
const app = express()
app.get('/4737', handler4737)
app.listen(3000, () => {})
        