
const express = require('express')
import {handler4792} from "./handler4792";
const app = express()
app.get('/4792', handler4792)
app.listen(3000, () => {})
        