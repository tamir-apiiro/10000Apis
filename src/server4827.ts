
const express = require('express')
import {handler4827} from "./handler4827";
const app = express()
app.get('/4827', handler4827)
app.listen(3000, () => {})
        