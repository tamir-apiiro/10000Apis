
const express = require('express')
import {handler4069} from "./handler4069";
const app = express()
app.get('/4069', handler4069)
app.listen(3000, () => {})
        