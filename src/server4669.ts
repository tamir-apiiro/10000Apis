
const express = require('express')
import {handler4669} from "./handler4669";
const app = express()
app.get('/4669', handler4669)
app.listen(3000, () => {})
        