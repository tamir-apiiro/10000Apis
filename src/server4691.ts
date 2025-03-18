
const express = require('express')
import {handler4691} from "./handler4691";
const app = express()
app.get('/4691', handler4691)
app.listen(3000, () => {})
        