
const express = require('express')
import {handler4197} from "./handler4197";
const app = express()
app.get('/4197', handler4197)
app.listen(3000, () => {})
        