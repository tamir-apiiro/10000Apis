
const express = require('express')
import {handler4194} from "./handler4194";
const app = express()
app.get('/4194', handler4194)
app.listen(3000, () => {})
        