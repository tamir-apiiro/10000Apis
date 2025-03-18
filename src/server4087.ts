
const express = require('express')
import {handler4087} from "./handler4087";
const app = express()
app.get('/4087', handler4087)
app.listen(3000, () => {})
        