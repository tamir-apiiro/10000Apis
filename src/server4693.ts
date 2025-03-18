
const express = require('express')
import {handler4693} from "./handler4693";
const app = express()
app.get('/4693', handler4693)
app.listen(3000, () => {})
        