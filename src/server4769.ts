
const express = require('express')
import {handler4769} from "./handler4769";
const app = express()
app.get('/4769', handler4769)
app.listen(3000, () => {})
        